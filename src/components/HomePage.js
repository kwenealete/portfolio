import React from 'react';


class HomePage extends React.Component{
    
    state= {
            show: false
        }
    

    showPage = () => {
        this.setState((prevState) =>( {show: !prevState.show}))
    }

    render() {
        return (
            <div>
                <div>
                    <h2 id="me">NOT YOUR <br></br>AVERAGE <br></br> SOFTWARE <br></br> DEVELOPER/ENGINEER</h2>
                    <h3>Be prepared to transform your <i>ideas</i> into <em>reality</em> </h3>
                </div>
                <button onClick={this.showPage} > </button>
                {this.state.show && (
                    <div>
                        <div>
                <img src="https://applogicdenver.com/wp-content/uploads/2018/07/mobile-apps.png" alt="pic" ></img>
                <p>World-Class Apps</p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8tJTtI_CCrt6B3oic5ulJbgGaK5lxMAxuvV5A4LpTsoAnjn6yw" alt="pic" ></img>
                <p>Tailord To Your Needs</p>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/ruler-triangle-measuring-tools-geometry_1262-14791.jpg?size=626&ext=jpg" alt="pic" ></img>
                <p>Pixel-Perfect Code</p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqitS5fW_lKyQAvIVHbmbcuu2FBNNvdKpSVazWvrRst3113Xnq" alt="pic" ></img>
                <p>Built With Love</p>
            </div>
        
        <div>
            <h2>Hi. I'm Monya, a software developer/engineer from Cameroon!</h2>
            <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. All of my work is diligently produced with the end goal of satisfying the customer. What would you do if you had a software expert available at your fingertips?</p>
        </div>
                    </div>
                )}

            </div> 
        )     
    }


} 

export default HomePage

   