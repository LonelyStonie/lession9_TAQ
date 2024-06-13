import React from 'react'

export default function Taqsinhvienlist({renderTaqsinhvienlist}) {
    console.log("data:",renderTaqsinhvienlist);
    let taqElement = renderTaqsinhvienlist.map((Taqsinhvien, index)=>{
            return(
                <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{Taqsinhvien.TAQid}</td>
                        <td>{Taqsinhvien.TAQname}</td>
                        <td>{Taqsinhvien.TAQphone}</td>
                        <td>{Taqsinhvien.TAQemail}</td>
                        <td>{Taqsinhvien.TAQstatus}</td>
                        <td>{Taqsinhvien.TAQage}</td>
                        <td>
                            Edit/Delete
                        </td>
                    </tr>
            )
    });
    return (
        <div>
            <h2>danh sach Sinh Vien</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ma SV</th>
                        <th scope="col">Ho Va Ten</th>
                        <th scope="col">Tuoi</th>
                        <th scope="col">SDT</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col">Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    {taqElement}
                </tbody>
            </table>

        </div>
    )
}
