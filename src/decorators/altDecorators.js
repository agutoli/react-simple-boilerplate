import alt from './alt';
import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

export const Actions = (targetClass) => {
  return alt.createActions(targetClass);
};

export const Store = (actionsInstance) => {
  Store._listeners = Store._listeners || {};

  const actions = Object.keys(actionsInstance).reduce((_actions, propName) => {
    if (typeof actionsInstance[propName] === 'function') {
      _actions.push({
        name: propName,
        handler: actionsInstance[propName]
      });
    }
    return _actions;
  }, []);

  return (targetClass) => {
    const store = alt.createStore(targetClass, targetClass.name);
    store.lifecycle = function () {
      actions.forEach((action) => {
        const cacheKey = `${targetClass.name}.${action.name}`;
        if (typeof targetClass.prototype[action.name] === 'function') {
          if (Store._listeners[cacheKey]) {
            return null;
          }
          Store._listeners[cacheKey] = true;
          this.state.bindAction(action.handler, targetClass.prototype[action.name]);
        } else {
          console.warn(`${targetClass.name}.prototype.${action.name} does not exists!`);
        }
        return null;
      });
    };
    return store;
  };
};

export const StoreContainer = function () {
  const stores = Array.from(arguments);
  class Connect extends React.Component {
    static contextTypes = {
      router: React.PropTypes.func.isRequired
    };

    static getStores() {
      return stores;
    }

    static getPropsFromStores() {
      const props = Connect.getStores().reduce((previousValue, currentValue) => {
        return {...currentValue.getState(), ...previousValue};
      }, {});
      return props;
    }
  }

  return (targetClass, properties = {}) => {
    const events = {};
    for (const prop in properties) {
      if (/^on([A-Z]*)([a-z]*)/.test(prop)) {
        events[prop] = properties[prop];
      } else {
        Connect.prototype[prop] = properties[prop];
      }
    }

    Connect.prototype.render = function () {
      return React.createElement(
        targetClass,
        {...this.props, ...events, ...Connect.getPropsFromStores() },
        this.props.children
      );
    };

    Connect.prototype.componentDidMount = properties.componentDidMount;
    Connect.prototype.componentDidUpdate = properties.componentDidUpdate;
    Connect.prototype.componentWillMount = properties.componentWillMount;
    Connect.prototype.componentWillUnmount = properties.componentWillUnmount;
    Connect.prototype.shouldComponentUpdate = properties.shouldComponentUpdate;
    Connect.prototype.componentWillReceiveProps = properties.componentWillReceiveProps;

    return connectToStores(Connect);
  };
};
