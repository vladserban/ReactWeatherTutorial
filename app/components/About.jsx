var React = require('react');
//
// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
    {/*   p*4>lorem    */}
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae beatae recusandae ab voluptate cum natus, blanditiis! Adipisci quis repellat animi cupiditate, a quisquam dolores repudiandae non! Perferendis excepturi veritatis voluptate!
      </p>
      <p>Nesciunt eveniet fugiat error quam quis necessitatibus beatae rem dolorem. Nulla, eum. Ex at eligendi perferendis iste, aliquid optio omnis possimus maxime dolores illum iure natus necessitatibus, quaerat. Nulla, facilis.
      </p>
      <p>At cum, nisi quos magnam ratione! Tempore ratione illum consequatur quod at natus fuga aliquid voluptates aperiam qui exercitationem modi eius, voluptatum eum quos est sed, doloribus quia aspernatur totam?
      </p>
    </div>
  );
};

module.exports = About;
