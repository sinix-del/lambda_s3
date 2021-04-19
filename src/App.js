import axios from 'axios'
import React, { Fragment } from 'react'

const url = 'https://umzmm90xm2.execute-api.us-east-1.amazonaws.com/api'

class App extends React.Component {
    state = {
        data: []
    }

    componentDidMount = async () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.innerHTML = `function showTime() {
            var date = new Date();
            var h = date.getHours(); // 0 - 23
            var m = date.getMinutes(); // 0 - 59
            var s = date.getSeconds(); // 0 - 59
            var session = "AM";
        
            if (h == 0) {
                h = 12;
            }
        
            if (h > 12) {
                h = h - 12;
                session = "PM";
            }
        
            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
        
            var time = h + ":" + m + ":" + s + " " + session;
            document.getElementById("MyClockDisplay").innerText = time;
            document.getElementById("MyClockDisplay").textContent = time;
        
            setTimeout(showTime, 1000);
        }
        
        showTime();
        `
        document.body.appendChild(script)
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
