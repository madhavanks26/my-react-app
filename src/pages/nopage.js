const NoPage = () => {
    return <div class="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
    <h1 class="display-1 fw-bold text-danger">404</h1>
    <p class="fs-3"><span class="text-danger">Oops!</span> Page not found.</p>
    <p class="lead">
        The page you’re looking for doesn’t exist.
    </p>
    <a href="/" class="btn btn-primary">Go Back to Home</a>
</div>;
  };
  
  export default NoPage;