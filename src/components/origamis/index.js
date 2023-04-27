import React, { Component } from "react";
import styles from "./index.module.css";
import Origam from "../origam";

class Origamis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origami: {}
        }
    }


    getDataOrigami = async () => {
        try {
            const origami = await (await (fetch('https://origami-ced55-default-rtdb.firebaseio.com/.json'))).json();

            this.setState({
                origami: origami
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    renderOrigamis() {
        const origamis = Object.entries(this.state.origami);

        return (
            origamis.map((origami) => {
            const [key, dataOrigami] = origami;
            return <Origam key={key} {...dataOrigami} />} )
        );
    }

    componentDidMount = () => {
        this.getDataOrigami();
    }

    render() {    
        return (
            <div className={styles.container}>
                <h1>Origamis</h1>
                {this.renderOrigamis()}
            </div>
        );
    }
}

export default Origamis;