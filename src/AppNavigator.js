import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView, NavigationActions, StackActions } from 'react-navigation'
import Home from './Home'
import History from './History'
import CustomDrawer from './CustomDrawer'
import Onboarding from './Onboarding'
import Login from './Login'
import studentDetail from './studentDetail'
import request from './request'
import createStudent from './createStudent'

const AppMenu = createDrawerNavigator(
    {
        "Home screen": {
            screen: Home,
        },
        "History": {
            screen: History,
        },
        "Request": {
            screen: request,
        }
    },
    {
        initialRouteName: "Home screen",
        contentComponent: CustomDrawer,
        drawerLockMode: 'locked-closed',
    }
)

// const prevGetStateForAction = Navigator.router.getStateForAction;

// Navigator.router.getStateForAction = (action, state) => {
//   // Do not allow to go back from Home
//   if (action.type === 'Navigation/BACK' && state && state.routes[state.index].routeName === 'Home') {
//     return null;
//   }

//   // Do not allow to go back to Login
//   if (action.type === 'Navigation/BACK' && state) {
//     const newRoutes = state.routes.filter(r => r.routeName !== 'Login');
//     const newIndex = newRoutes.length - 1;
//     return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
//   }
//   return prevGetStateForAction(action, state);
// };

const AppStack = createStackNavigator(
    {
        "Onboarding":{
            screen: Onboarding,
        },
        "Login":{
            screen: Login,
        },
        Drawer: {
            screen: AppMenu,
        },
        'Detail': {
            screen: studentDetail, 
        },
        'Create': {
            screen: createStudent
        }
    },
    {
        initialRouteName: "Onboarding",
        navigationOptions: {
            header: null,
        }
    },
);

export default AppStack