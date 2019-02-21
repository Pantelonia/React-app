import React, {PureComponent} from "react";

class Article extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
        // this.hadleClick =handleClick.bind(this)
    }

    // state = {
    //     isOpen: false
    // }
    componentWillMount() {
        console.log('---', 'mounting')
        //используется для получения данных, например отправка запроса за статьей
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }

    componentWillUpdate() {
        console.log('---', 'will update')
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen
    // }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const style = {margin: '20px', width: '50%'}
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={style}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                    <h6 className="card-subtitle text-muted">creation
                        date:{(new Date(article.date)).toDateString()}</h6>

                </div>
            </div>
        )
    }

    incrementCounter =()=>{
        this.setState({
            count:this.state.count +1
        })
    }
    handleClick = () => {
        // // this.setState({
        // //     isOpen: !this.state.isOpen
        //
        // })
    }
}

// function Article(props) {
//     const {article} = props
//     const body = <section>{article.text}</section>
//     return (
//         <div>
//             <h2>
//                 {article.title}
//                 <button onClick={handleClick}>close</button>
//             </h2>
//             {body}
//             <h3>creation date:{(new Date(article.date)).toDateString()}</h3>
//
//         </div>
//     )
// }
// function handleClick() {
//     console.log('---','clicked')
// }

export default Article