import * as React from "react";
import { Redirect } from "react-router";
import axios from 'axios'
import { Form, Icon, Input, Button, Checkbox, message as Message } from 'antd';
import {accountLogin} from '../service/user'
const FormItem = Form.Item;
import '@/style/login.scss'

const Title = () => <h1>用户登录</h1>;

let Login = class Login extends React.Component<any, any> {
  state = {
    redirectToReferrer: false
  }
  handleSubmit = (event: any) => {
    event.preventDefault();
    let self = this;
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        let param = Object.assign({}, values)
        accountLogin(param).then(data => {
          let {message, success, user, token} = data
          if (!success) {
            Message.success(message);
          } else {
            localStorage.setItem('access-user', token)
            axios.defaults.headers.common['Authorization'] = token
            localStorage.setItem('user', user)
            self.setState({ redirectToReferrer: true })
          }
        }).catch (() => {
          Message.error('用户名或密码错误');
        })
      }
    });
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/app/home' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="login">
        <Title />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
              )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Login);
