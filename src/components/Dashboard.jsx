import { useLoaderData } from "react-router-dom";

const Dashboard = () => {

    const { companies, jobs } = useLoaderData();

    return (
        <div className="mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Companies
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{companies.length}</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Jobs
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{jobs.length}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;