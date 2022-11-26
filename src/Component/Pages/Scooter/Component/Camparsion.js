import React from 'react'
import scooter from "../Databse/ScooterData.json"
const Camparsion = () => {

    const showData = [
        {
            id: 1,
            name: "TVS iQube",
            value: scooter.filter((item) => item.company === "TVS")

        },
        {
            id: 2,
            name: "Ola s1 pro",
            value: scooter.filter((item) => item.company === "Ola")

        },
        {
            id: 3,
            name: "Ather 450x",
            value: scooter.filter((item) => item.company === "Ather")
        }
    ]
    return (
        <>
            <div className="table-responsive mt-5">
                <h1 className="text-center">Camparsion</h1>
                <table className="table table-striped text-successtable-border border-light">
                    <thead className="border-light">
                        <tr>
                            <th scope="col" />
                            {showData.map((item) => {
                                return (
                                    <th scope="col" key={item.id}  >
                                        <img src={item.value[0].image} className="w-100" alt="..." style={{
                                            height: "150px"
                                        }} />
                                        <h5 className="text-center mt-2">{item.name}</h5>
                                    </th>
                                )
                            })}

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Top Speed</th>
                            {showData.map((item) => {
                                return (
                                    <td key={item.id}>{item.value[0].topSpeed}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row">Range/Full charge</th>
                            {showData.map((item) => {
                                return (
                                    <td key={item.id}>{item.value[0].araiRange}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row">Battery</th>
                            {showData.map((item) => {
                                return (
                                    <td key={item.id}>{item.value[0].batteryCapacity}</td>
                                )
                            })}

                        </tr>
                        <tr>
                            <th scope="row">Reviews</th>
                            {showData.map((item) => {
                                return (
                                    <td key={item.id}>{item.value[0].rating}</td>
                                )
                            })}
                            <td>-</td>
                            <td>-</td>
                            <td>
                                <i className="fas fa-check" />
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">Price</th>
                            {showData.map((item) => {
                                return (
                                    <td key={item.id}>{item.value[0].price}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th scope="row">Tech Support</th>
                            <td>None</td>
                            <td>35$/incident</td>
                            <td>15$/incident</td>
                        </tr>
                        <tr>
                            <td />
                            <td className="fw-bold">Free</td>
                            <td className="fw-bold">$99/mo</td>
                            <td className="fw-bold">$179/mo</td>
                        </tr>
                        <tr>
                            <th className="" />
                            <th className="">
                                <button className="btn btn-primary">Sign-up</button>
                            </th>
                            <th className="">
                                <button className="btn btn-primary">Buy Now</button>
                            </th>
                            <th className="">
                                <button className="btn btn-primary">Buy Now</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Camparsion