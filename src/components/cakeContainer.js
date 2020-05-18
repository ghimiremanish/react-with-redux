import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function cakeContainer(props) {
    return (
        <div style={{padding: '10%'}}>
            <h1>Number of cakes: {props.numebrOfCakes}</h1>
            <button onClick={props.buyCake}>BUY</button>
        </div>
    )
}

  const mapStateToProps = state => {
    return {
        numebrOfCakes: state.numberOfCakes
    }
  }

  const mapDispatchToProps = dispatch => {
      return {
          buyCake: () => dispatch(buyCake())
      }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(cakeContainer)
