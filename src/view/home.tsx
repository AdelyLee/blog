import * as React from "react";
import { Card } from 'antd';
import { getArticles } from '../service/articles'
const Title = () => <h1>文章列表</h1>;
const Article = (article: any) => (
  <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
    <div className="custom-image">
      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
    </div>
    <div className="custom-card">
      <h3>Europe Street beat</h3>
      <p>www.instagram.com</p>
    </div>
  </Card>
)

class Home extends React.Component<any, any> {
  state = {
    articles: []
  }

  componentDidMount() {
    let params = {
      date: {
        startDate: '2017-09-15',
        endDate: '2017-09-16'
      },
      page: {
        limit: 10,
        orders: [],
        page: 1
      },
      type: ['news']
    }
    getArticles(params).then(data => {
      let { content } = data
      this.setState({ articles: content })
    }).catch(error => {

    })
  }

  render() {
    let logo = require("@/assets/logo.svg");
    return (
      <div id="home">
        <Title />
        <img src={logo} style={{ width: 200 }} alt="" />
        {this.state.articles.map((article, i) => (
          <Article key={i} {...article} />
        ))}
      </div>
    );
  }
}

export default Home;
