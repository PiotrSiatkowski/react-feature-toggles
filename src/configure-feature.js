import React from 'react';
import curry from './curry';
import { Consumer } from './context';

export const configureFeature = curry(
  (InactiveComponent, name, ActiveComponent) => props => (
    <Consumer>
      {features =>
        features.includes(name) ? (
          <ActiveComponent {...props} />
        ) : (
          <InactiveComponent {...props} />
        )
      }
    </Consumer>
  )
);
