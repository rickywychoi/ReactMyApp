import React from 'react';

//// export 'WithClasses' as a Wrapping Component
// const withClasses = (props) => (
//   <div className={props.classes}>
//     {props.children}
//   </div>
// );

// export 'withClasses' as a Wrapping Function;
// returns functional component
const withClasses = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
};

//// returns class component
// const withClasses = (WrappedComponent, className) => {
//   return class extends Component {
//     render() {
//       return (
//         <div className={className}>
//           <WrappedComponent {...this.props} />
//         </div>
//       )
//     }
//   } 
// };

export default withClasses;