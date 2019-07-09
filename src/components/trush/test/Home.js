import React from 'react';
// import '../../../assets/css/index.css';
import Button from '@material-ui/core/Button'; // 导入Button组件

class Home extends React.Component {
    //子类必须在构造器中的第一行调用super方法，否则新建实例会报错，因为子类中没有this对象，而是继承父类的this
    constructor(props) {
        //父类的this
        super(props);
        //定义react数据

        this.state = {
            "msg": "Person组件",
            tittle: "这是tittle",
            color: 'red',
            style: {
                color: 'red',
                fontSize: '40px'
            }
        }
    }

    //绑定属性 要注意
    // class--> className
    // for--> htmlFor
    //   style 也是稍有差异             <div style={{"color": 'red'}}>行内样式 写法也与html有所不同</div>
    //其他没变

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>

                <div title={this.state.title}>这是一个DIV</div>
                <Button variant='contained' color='primary'>Home 的按钮</Button>

            </div>
        );
    }
}

export default Home;
