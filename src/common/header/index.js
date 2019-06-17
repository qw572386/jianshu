import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Header extends Component {
  getListArea = () => {
    const { list, focused, page, totalPage, onMouseEnter, onMouseLeave, mouseIn, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        newList[i] && pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => {
              handleChangePage(page, totalPage, this.spinIcon)
            }}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe606;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">
            首页
          </NavItem>
          <NavItem className="left">
            下载App
          </NavItem>
          <NavItem className="left">
            <SearchWrapper>
              <CSSTransition
                timeout={500}
                in={focused}
                classNames="slide"
              >
                <NavSearch onFocus={() => {handleInputFocus(list)}} onBlur={handleInputBlur} className={focused ? 'focused' : ''}/>
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
              {this.getListArea()}
            </SearchWrapper>
          </NavItem>
          <NavItem className="right">
            登录
          </NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className="writting"><i className="iconfont">&#xe642;</i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    onMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    onMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+ originAngle + 360 +'deg)';
      let nextPage = page + 1;
      if (nextPage > totalPage) {
        nextPage = 1;
      }
      dispatch(actionCreators.changePage(nextPage))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
