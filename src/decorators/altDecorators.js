import alt from './alt';
import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

export const Actions = (targetClass) => {
  return alt.createActions(targetClass);
};

export const Store = (targetClass) => {
  return alt.createStore(targetClass, targetClass.name);
};

export const StoreContainer = function () {
  const stores = Array.from(arguments);
  class Connect extends React.Component {
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
      }
    }

    Connect.prototype.render = function () {
      return React.createElement(
        targetClass,
        { ...events, ...Connect.getPropsFromStores() },
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
