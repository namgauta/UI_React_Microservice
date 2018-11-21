import React from 'react';


class App extends React.Component {
 
  componentDidMount(){
    console.log(this.props.fetchCarData());
    this.props.fetchAccountsData()
  }
  
  render() {
    return <div className="container">
    
    
     <nav className="nav nav-tabs">
            <a href="/" className="btn btn-primary">All User Page</a>
            
            
     </nav>
   
    
  
    {React.cloneElement(this.props.children,this.props)}
</div>
  }
}

export default App;
