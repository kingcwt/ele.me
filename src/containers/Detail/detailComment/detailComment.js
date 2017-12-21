import React, {Component} from 'react';
import './detailComment.less';
import {connect} from 'react-redux';
import actions from '../../../store/actions/detail';

class DetailComment extends Component {
  componentDidMount() {
    this.props.fetchRating(152106988);
    this.props.fetchTags(152106988);
    this.props.fetchJudgeList(152106988, 0);
  }

  render() {
    let rate = this.props.rating.rate;
    let tags = this.props.tags.tag;
    let judgeList = this.props.judgeList;
    return (
      <div className='detail-comment'>
        <div className="comment-header">
          <div className="comment-header-right">
            <h2>{rate.overall_score ? (rate.overall_score).toFixed(1) : ''}</h2>
            <span>综合评价</span>
            <span>高于周边商家{rate.compare_rating ? (rate.compare_rating * 100).toFixed(1) : ''}%</span>
          </div>
          <div className="comment-header-left">
            <div>
              <span>服务态度</span>
              <div className='svg'>
                <div className='star' style={{width:`${rate.service_score * 100 / 5}%`}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 10" width="100%" height="100%">
                    <path fill="#FFCC01" fillRule="evenodd"
                          d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z"></path>
                  </svg>
                </div>
              </div>
              <span>{rate.service_score ? (rate.service_score).toFixed(1) : ''}</span>
            </div>
            <div>
              <span>菜品评价</span>
              <div className='svg'>
                <div className='star' style={{width:`${rate.food_score * 100 / 5}%`}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 10" width="100%" height="100%">
                    <path fill="#FFCC01" fillRule="evenodd"
                          d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z"></path>
                  </svg>
                </div>
              </div>
              <span>{rate.food_score ? (rate.food_score).toFixed(1) : ''}</span>
            </div>
            <div>
              <span>送达时间</span>
              <span>{rate.deliver_time ? (rate.deliver_time) : ''}分钟</span>
            </div>
          </div>
        </div>
        <div className="comment-content">
          <div>
            <div>
              {tags.map((item, index) => (
                <span key={index}>{item.name}({item.count})</span>
              ))}
            </div>
          </div>
          <ul>
            {judgeList.map((item, index) => (
              <li key={index}>
                <img className='detail-avatar'
                     src="https://fuss10.elemecdn.com/c/f5/d0b0f2fc83f3ac3e4a0cfae891256png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/"
                     alt=""/>
                <div className='comment-content-right'>
                  <p><span>{item.username}</span><span>{item.rated_at}</span></p>
                  <div className='svg'>
                    <div className='star' style={{width:`${item.rating * 100 / 5}%`}}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 10" width="100%" height="100%">
                        <path fill="#FFCC01" fillRule="evenodd"
                              d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='food-image'>
                    {
                      item.image_hash ? <img
                        src="https://fuss10.elemecdn.com/1/6d/3ac1d2617c9c4e0cf70cd69f480d2jpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/"
                        alt=""/> : null
                    }
                  </div>
                  <div className='food-item'>
                    {
                      item.food_ratings.map((item, index) => {
                        return <span key={index}>{item.rate_name}</span>
                      })
                    }
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(state => state.detail, actions)(DetailComment);