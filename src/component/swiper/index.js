import React, { Component } from "react";


// 引入ant design 组件库
import { Carousel } from 'antd-mobile';
// 引入axios
import axios from "axios";


class Swiper extends Component {
    state = {
        swiper: [],
        imgHeight: 176,
    }
    componentDidMount() {
        // 获取轮播图
        axios.get('http://157.122.54.189:9060/home/swiper').then(res => {
            this.setState({
                swiper: res.data.body
            })
        })
    }
    render() {
        const { swiper } = this.state
        return <div>
            {swiper.length && <Carousel
                autoplay
                infinite
                beforeChange={(from, to) => console.log()}
                afterChange={index => console.log()}
            >
                {swiper.map(item => (
                    <a
                        key={item.id}
                        style={{ display: 'block', width: '100%', height: this.state.imgHeight }}
                    >
                        <img
                            src={`http://157.122.54.189:9060` + item.imgSrc}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                ))}
            </Carousel>}
        </div>;
    }
}

export default Swiper