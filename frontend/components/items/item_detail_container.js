import { connect } from 'react-redux';
import ItemDetail from './item_detail';

const mstp = (state, ownProps) => {
  const itemId = ownProps.match.params.itemId;
  return ({
    item: state.entities.items[itemId]
  });
};

const mdtp = dispatch => {
  return ({

  });
};

export default connect(mstp, mdtp)(ItemDetail);