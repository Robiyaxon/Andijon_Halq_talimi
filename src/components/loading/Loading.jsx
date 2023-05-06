import React from "react";
import "./Loading.css"
const Loading =()=>
  <div className="loading">
    <div></div>
    <div></div>
  </div>  



class Page extends React.Component {
  state = {
    loading: true,
  };
  
  componentDidMount(){
    this.isLoading = setTimeout(()=>{this.setState({loading: false})}, 2300);
  }
  componentWillUnmount() {
     clearTimeout(this.isLoading);
  }
  
  timer = () => setTimeout(()=>{
    this.setState({loading: false})
  }, 2300);

  render() {
    const {loading} = this.state;
    return (
      loading ? (<Loading/>)
      :(<div className="content">
          <h1>Hello</h1>
      </div>)
    )
  }
}

export default Page