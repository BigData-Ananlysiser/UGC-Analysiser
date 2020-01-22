import React from 'react';
import { connect } from 'dva';

class SecurityLayout extends React.Component {
  state = {};

  componentDidMount() {
    this.setState({});
    const { dispatch } = this.props;

    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }

  render() {
    // const { isReady } = this.state;
    const { children } = this.props; // You can replace it to your authentication rule (such as check token exists)
    // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）

    // const isLogin = currentUser && currentUser.userid;
    // const queryString = stringify({
    //   redirect: window.location.href,
    // });

    // if ((!isLogin && loading) || !isReady) {
    //   return <PageLoading />;
    // }

    // if (!isLogin) {
    //   return <Redirect to={`/user/login?${queryString}`}></Redirect>;
    // }

    return children;
  }
}

export default connect(({ user, loading }) => ({
  currentUser: user.currentUser,
  loading: loading.models.user,
}))(SecurityLayout);
