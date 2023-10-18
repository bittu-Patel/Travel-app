import React from 'react'

const Navbar = () => {
  return (
<nav className='border-2 border-red-500 flexBetween max-import { connect } from 'react-redux'
import component from 'componentPath'
import {actionCreator} from 'actionCreatorPath'

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        mergeProp: mergePropVal
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)'>


</nav>
    )
}

export default Navbar