import * as React from "react";
import { Redirect } from "react-router";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import '@/style/login.scss'

const Title = () => <h1>用户登录</h1>;
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: any) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb: any) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

let Login = class Login extends React.Component<any, any> {
  state = {
    redirectToReferrer: false
  }
  handleSubmit = (event: any) => {
    event.preventDefault();
    let self = this;
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        fakeAuth.authenticate(() => {
          self.setState({ redirectToReferrer: true })
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
            {getFieldDecorator('userName', {
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
