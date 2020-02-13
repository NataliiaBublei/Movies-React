import React from "react";

import { FilmsServiceConsumer} from "../films-service-context";

const withFilmsService = () => (Wrapped) => {
  return (props) => {
    return (
      <FilmsServiceConsumer>
        {
          (apiAdapter) => {
            return <Wrapped {...props}
                            apiAdapter={apiAdapter}/>
          }
        }
      </FilmsServiceConsumer>
    )
  }
};

export default withFilmsService;
