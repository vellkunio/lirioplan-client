import React, { Component } from 'react';


// const reviews = [
//   {
//     name: 'Elena Bychkova',
//     topic: 'Glad I found you',
//     text: `I was building a house
//     and my biggest struggle
//     was to make everything
//     in my style. Lirioplan
//     didn’t just help me to
//     make it georgeous, but
//     also suggested some
//     extra tips which made it
//     look 1000% better!`
//   },
//   {
//     name: 'Alexander Martinez',
//     topic: 'Best of the best',
//     text: `Thank you so much! Very
//     client-oriented company.
//     All guys are very polite,
//     friendly and professional.
//     Came in time and did
//     everything better than I
//     expected. Sure it’s going
//     to last forever.`
//   },
//   {
//     name: 'Vasyl Caniuca',
//     topic: 'Thank you!',
//     text: `Just wanted to thank Sam
//     and his team for an
//     excellent service and
//     perfect tile installation.
//     I have been working with
//     Lirioplan for many years
//     now and it is the only
//     company I trust in Ontario`
//   }
// ]

class ReviewsTransitionDesktop extends Component {

  constructor(props){
      super(props);
      this.switchImage = this.switchImage.bind(this);
      this.state ={
          reviews: [
            {
              name: 'Elena Bychkova',
              topic: 'Glad I found you',
              text: `I was building a house
              and my biggest struggle
              was to make everything
              in my style. Lirioplan
              didn’t just help me to
              make it georgeous, but
              also suggested some
              extra tips which made it
              look 1000% better!`
            },
            {
              name: 'Alexander Martinez',
              topic: 'Best of the best',
              text: `Thank you so much! Very
              client-oriented company.
              All guys are very polite,
              friendly and professional.
              Came in time and did
              everything better than I
              expected. Sure it’s going
              to last forever.`
            },
            {
              name: 'Vasyl Caniuca',
              topic: 'Thank you!',
              text: `Just wanted to thank Sam
              and his team for an
              excellent service and
              perfect tile installation.
              I have been working with
              Lirioplan for many years
              now and it is the only
              company I trust in Ontario`
            }
              
            ],
          currentReview: 0
      }
  }



  switchImage() {
      if (this.state.currentReview < this.state.reviews.length - 1) {
        this.setState({
          currentReview: this.state.currentReview + 1,
          isChanging: true
        });
      } else {
        this.setState({
          currentReview: 0
        });
      }
      this.setState({
          isChanging: false
        });
      return this.currentReview;
    }

    //uncomment for slide show
    componentDidMount() {
      setInterval(this.switchImage, 10000); //todelete
    }


  render() {
    let currentReview;
    currentReview = this.state.currentReview;
    return (
      <div >

            <div style={{
                width: '500px', height: '250px', display: 'block',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '10px', marginTop: '32px', marginBottom: '40px',
                marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', alignItems: 'center'
                }}>
                <h5 className="font-belleza" style={{
                    color: 'white', fontWeight: '400', fontSize: '18px',
                    lineHeight: '20px', textAlign: 'center', letterSpacing: '0.17em',
                    paddingTop: '40px'
                }}>
                    {/* Helen Bychkova */}
                    {this.state.reviews[this.state.currentReview].name}
                </h5>

                <h6 className="font-merriweather" style={{
                    color: 'rgba(127, 132, 255, 0.8)', fontWeight: '700', fontSize: '16px',
                    lineHeight: '20px', textAlign: 'center', letterSpacing: '0.12em',
                    marginTop: '32px'
                }}>
                    [ {this.state.reviews[this.state.currentReview].topic} ]
                </h6>

                <p className="font-merriweather" style={{
                    color: 'white', fontWeight: '300', fontSize: '12px',
                    lineHeight: '22px', textAlign: 'center', letterSpacing: '0.12em',
                    marginTop: '16px', width: '400px', whiteSpace: 'normal',
                    overflowX: 'hidden', overflowY: 'hidden', marginLeft: 'auto', marginRight: 'auto'
                }}>
                    {this.state.reviews[this.state.currentReview].text}
                </p>

                <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <div style={{
                  borderRadius: '50%', width: '5px', height: '5px',
                  backgroundColor: 'white',
                  opacity: currentReview === 0 ? '100%' : '50%',
                  marginLeft: '3px', marginRight: '3px', display: 'inline-block'
                }}> </div>
                <div style={{
                  borderRadius: '50%', width: '5px', height: '5px',
                  backgroundColor: 'white', 
                  opacity: currentReview === 1 ? '100%' : '50%',
                  marginLeft: '3px', marginRight: '3px', display: 'inline-block'
                }}></div>
                <div style={{
                  borderRadius: '50%', width: '5px', height: '5px',
                  backgroundColor: 'white',
                  opacity: currentReview === 2 ? '100%' : '50%',
                  marginLeft: '3px', marginRight: '3px', display: 'inline-block'
                }}>
                </div>
              </div>




            </div>

          </div>
      )
    }
  }
    

      export default ReviewsTransitionDesktop