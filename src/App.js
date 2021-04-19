import axios from 'axios'
import React, { Fragment } from 'react'

const url = 'https://umzmm90xm2.execute-api.us-east-1.amazonaws.com/api'

class App extends React.Component {
    state = {
        data: []
    }

    componentDidMount = async () => {
        try {
            let resp = await axios.get(url)
            this.setState({ data: resp.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <Fragment>
                Rendered on client
                {this.state.data.map(item => (
                    <div><h1>Product: {item.name}</h1><p>Price: ${item.price}</p><p>Description: {item.desc}</p></div>
                ))}
            </Fragment>
        )
    }
}

export default App;
