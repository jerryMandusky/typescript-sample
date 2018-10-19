import * as React from "react";
import "./loadingSpinner.css";
import { promiseTrackerHoc } from 'react-promise-tracker';
import { BeatLoader } from "react-spinners";

interface Props {
  trackedPromiseInProgress?: boolean;
}

const InnerLoadingSpinnerComponent: React.StatelessComponent<any> = (props: Props) => {
  if (props.trackedPromiseInProgress === true) {
    return (
      <div className="loading">
        <BeatLoader
          loading={props.trackedPromiseInProgress}
          color={"#FFFF00"}
        />
      </div>
    );
  } else {
    return null;
  }
};

export const LoadingSpinnerComponent = promiseTrackerHoc(InnerLoadingSpinnerComponent);