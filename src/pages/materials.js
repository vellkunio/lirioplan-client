import React, { Component, Fragment } from 'react'
import MaterialsTable from '../components/MaterialsTable';
import axios from 'axios';

class materials extends Component {

    state = {
        materials: null
    }
    componentDidMount(){
        axios.get('/materials')
            .then(res => {
                console.log(res.data)
                this.setState({
                    materials: res.data
                })
                console.log(this.state.materials);
            })
            .catch(err => console.log(err));
    }

    render() {



        return (
            // <Fragment>
            <div>
                {this.state.materials ? (
                    <MaterialsTable materials={this.state.materials}/>
                ) : (
                    <h1>loading..</h1>
                )}
            </div>
            // </Fragment>
        )
    }
}

export default materials





// import React, { Component, Fragment } from 'react'
// import MaterialsTable from '../components/MaterialsTable';
// import axios from 'axios';

// class materials extends Component {

//     state = {
//         materials: null
//     }
//     componentDidMount(){
//         axios.get('/materials')
//             .then(res => {
//                 console.log(res.data)
//                 this.setState({
//                     materials: res.data
//                 })
//             })
//             .catch(err => console.log(err));
//     }

//     render() {
//         // let materialsArray = [];
//         // this.state.materials ? (
//         // this.state.materials.map(project => materialsArray.push(project))
//         // ) : (
//         //     <p>Loading...</p>
//         // );
//         // console.log(this.state.materials);


//         let materialsArray = [];
//         this.state.materials ? (
//             this.state.materials.map(material => materialsArray.push(material))
//             ) : (
//                 <h3>Loading</h3>
//             );
//             let tableToShow = <MaterialsTable materialsArray={this.state.materials}/>

//         return (
//             <Fragment>
//                 {/* materialsArray is array of materials */}
//                 {/* <h1><MaterialsTable materials={materialsArray}/></h1> */}
//                 {/* {materialsArray} */}
//                 {tableToShow}
//                 {/* <MaterialsTable materials={this.state.materials}/> */}

//             </Fragment>
//         )
//     }
// }

// export default materials
