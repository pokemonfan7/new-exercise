import React,{ Component } from 'react'

class Hello extends Component{
	render(){
		return <p>Hello</p>
	}
}
//属性代理
function WrapperHello(Comp){
	class WrapComp extends Component{
		render(){
			return 
			<div>
				<span>lets go</span>
				<Comp {...this.props}></Comp>
			</div>
		}
	}
	return WrapComp
}

//反向继承
function WrapperHello(Comp){
	class WrapComp extends Comp{
		componentDidMount(){
			console.log('高阶组件新增的生命周期')
		}
		render(){
			return <Comp></Comp>
		}
	}
	return WrapComp
}

Hello=WrapperHello(Hello)