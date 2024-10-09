export default function JSXinDeep(){
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
      }
      
      const user = {
        firstName: 'Dustin',
        lastName: 'Henderson'
      };
      
    const element = <h1>Hello, {formatName(user)}!</h1>;

    return(
        element
    )
    
}