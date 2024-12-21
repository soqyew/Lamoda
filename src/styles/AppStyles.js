const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
    },
    sidebar: {
      width: '15%', 
      marginRight: '20px',
    },
    productList: {
      width: '80%', 
    },
    '@media (max-width: 768px)': {
      container: {
        flexDirection: 'column', 
      },
      sidebar: {
        width: '100%', 
        marginRight: '0', 
        marginBottom: '20px', 
      },
      productList: {
        width: '100%', 
      },
    },
  };
  
  export default styles;