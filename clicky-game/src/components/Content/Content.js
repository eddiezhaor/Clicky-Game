import React from "react";
import Header from "../Header/Header"
import Image from "../Image/Image"
class Content extends React.Component {
    state = {
        imageLink: [{id:1, link:"./clickImage/picture1.jpg"},{id:2, link:"./clickImage/picture2.png"},{id:3, link:"./clickImage/picture3.jpeg"},{id:4, link:"./clickImage/picture4.jpg"},{id:5, link:"./clickImage/picture5.png"},{id:6, link:"./clickImage/picture6.png"},{id:7, link:"./clickImage/picture7.png"},{id:8, link:"./clickImage/picture8.png"},{id:9, link:"./clickImage/picture9.png"},{id:10, link:"./clickImage/picture10.jpg"},{id:11, link:"./clickImage/picture11.png"},{id:12, link:"./clickImage/picture12.png"}],
        number: 0,
        score: 0,
        topScore: 0,
        guessed:[],
        message:"Click an image to begin!",
        id:""
    };
    shuffle = (imgId,imageLink) =>{
        let i = 0;
        let j=0;
        let temp =null;
        for (i = imageLink.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * i)
          temp = imageLink[i]
          imageLink[i] = imageLink[j]
          imageLink[j] = temp
        }
        if(this.state.guessed.indexOf(imgId)<0){
            if(this.state.topScore <= this.state.score){
                this.setState({
                    imageLink:imageLink,
                    number:"good",
                    score: this.state.score + 1,
                    topScore:this.state.topScore+1,
                    guessed:[...this.state.guessed,imgId],
                    message:"New Record!!",
                    id:"Newmessage"
                })
            }else{
                this.setState({
                    imageLink:imageLink,
                    number:"good",
                    score: this.state.score + 1,
                    guessed:[...this.state.guessed,imgId],
                    message:"Right!!",
                    id:"message" 
                })
            }
        }
        else{
            this.setState({
                imageLink:imageLink,
                number:0,
                score: 0,
                guessed:[],
                message:"Click an image to begin!",
                id:"wrongMessage"
            })
        }
      }
   render(){
    return (
            <div>
                <Header id={this.state.id} message={this.state.message} score={this.state.score} topScore={this.state.topScore}></Header>
                <Image 
                    image={this.state.imageLink}
                    shuffle={this.shuffle}
                ></Image>
            </div>
    )}}

export default Content;