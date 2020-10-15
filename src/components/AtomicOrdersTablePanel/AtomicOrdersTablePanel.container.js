import { connect } from 'react-redux'

import {
  getComponentState, getActiveExchange, getActiveMarket,
} from '../../redux/selectors/ui'
import { getAllOrders } from '../../redux/selectors/ws'
import { getExchanges } from '../../redux/selectors/meta'
import UIActions from '../../redux/actions/ui'

import AtomicOrdersTablePanel from './AtomicOrdersTablePanel'

const mapStateToProps = (state = {}, ownProps = {}) => {
  const { layoutID, layoutI: id } = ownProps

  return {
    activeExchange: getActiveExchange(state),
    savedState: getComponentState(state, layoutID, 'atomic-orders', id),
    activeMarket: getActiveMarket(state),
    exchanges: getExchanges(state),
    atomicOrders: getAllOrders(state),
  }
}

const mapDispatchToProps = dispatch => ({
  saveState: (layoutID, componentID, state) => {
    dispatch(UIActions.saveComponentState({
      state,
      layoutID,
      componentID,
    }))
  },
  setFiltredValueWithKey: (key, value) => {
    dispatch(UIActions.setFiltredValueWithKey(key, value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AtomicOrdersTablePanel)
