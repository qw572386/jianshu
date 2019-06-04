import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

const Header = (props) => {
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
              in={props.focused}
              classNames="slide"
            >
              <NavSearch onFocus={props.handleInputFocus} onBlur={props.handleInputBlur} className={props.focused ? 'focused' : ''}/>
            </CSSTransition>
            <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
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
const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
