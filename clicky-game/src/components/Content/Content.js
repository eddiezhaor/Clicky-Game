import React from "react";
import Header from "../Header/Header"
class Content extends React.Component {
    state = {
        imageLink: [{id:1, link:"./clickImage/picture1.jpg"},{id:2, link:"./clickImage/picture2.png"},{id:3, link:"./clickImage/picture3.jpeg"},{id:4, link:"./clickImage/picture4.jpg"},{id:5, link:"./clickImage/picture5.png"},{id:6, link:"./clickImage/picture6.png"},{id:7, link:"./clickImage/picture7.png"},{id:8, link:"./clickImage/picture8.png"},{id:9, link:"./clickImage/picture9.png"},{id:10, link:"./clickImage/picture10.jpg"},{id:11, link:"./clickImage/picture11.png"},{id:12, link:"./clickImage/picture12.png"}],
        number: 0,
        score: 0,
        topScore: 0
    };
    shuffle = (array,event) =>{
        let i = 0;
        let j=0;
        let temp =null;
        for (i = array.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * i)
          temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
        if(this.state.number!==event.target.getAttribute('data-id')){
            if(this.state.topScore <= this.state.score){
                this.setState({
                    imageLink:array,
                    number:event.target.getAttribute('data-id'),
                    score: this.state.score + 1,
                    topScore:this.state.topScore+1
                })
            }else{
                this.setState({
                    imageLink:array,
                    number:event.target.getAttribute('data-id'),
                    score: this.state.score + 1
                })
            }
            console.log(event.target.getAttribute('data-id'))
            console.log(this.state.number)
        }else{
            this.setState({
                imageLink:array,
                number:0,
                score: 0
            })
        }
     
        console.log(this.state.score)
      }
    refresh = () =>{
        return (
            this.state.imageLink.map(img =>(
                <div role="img" data-id={img.id} onClick={this.shuffle.bind(this,this.state.imageLink)} aria-label="click item" key={img.id} className="click-item" style={{ backgroundImage: `url(${img.link})`}}></div>
           ))
        )
    }
   render(){
    return (
            <div>
                <Header score={this.state.score} topScore={this.state.topScore}></Header>
                <main className="MainContainer">
                    {this.refresh()}
                </main>
            </div>
    )}}

export default Content;