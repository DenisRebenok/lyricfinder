import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {({ track_list, heading }) =>
          track_list === undefined || track_list.length === 0 ? (
            <Spinner />
          ) : (
            <React.Fragment>
              <h3 className="text-center mb-4">{heading}</h3>
              <div className="row">
                {track_list.map(({ track }) => (
                  <Track key={track.id} track={track} />
                ))}
              </div>
            </React.Fragment>
          )
        }
      </Consumer>
    );
  }
}
