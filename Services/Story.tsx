

function Page({ story}) {
    // return <div> Story: {story}</div>
  }
  
  Page.getInitialProps = async () => {
    const res = await fetch('services.json')
    const json = await res.json()
    return { story: json }
  }
  
  export default Page