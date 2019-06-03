import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
  render() {
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
                in={this.state.focused}
                classNames="slide"
              >
                <NavSearch onFocus={this.handleInputFocus} onBlur={this.handleInputBlur} className={this.state.focused ? 'focused' : ''}/>
              </CSSTransition>
              <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
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
  handleInputFocus() {
    this.setState({
      focused: true
    })
  }
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}
export default Header
