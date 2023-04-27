
export default function Home() {
  return (
    <>
      <div class="row">
        <div className="col-1 col-auto">
        <div class="card" >
          <div class="card-header">
            Featured
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        </div>
        <div className="col-11">
        <h1>Hello <span className=" text-success bg-light">visitor🤓!</span></h1>
        </div>
      </div>
    </>
  )
}
