export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 230,
    renderCell: (params)=>{
        return (
            <div className="cellWithImg">
                <img src={params.row.categoryImage} className="cellImg" alt="categoryImage"/>
                {params.row.username}
            </div>
        )
    } },
  
    { field: 'slug', headerName: 'Slug', width: 70 },

]

export const userRows = [
    {
        id:1,
        username:"Snow",
        img:"https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=200",
        status: "Passive",
        email:"snow@gmail.com",
        mobile: "9874569836"
    },

    {
        id:2,
        username:"Snow",
        img:"https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
        status: "Active",
        email:"snow@gmail.com",
        mobile: "9874569836"
    },
    {
        id:3,
        username:"Snow",
        img:"https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=200",
        status: "Pending",
        email:"snow@gmail.com",
        mobile: "9874569836"
    },
    {
        id:4,
        username:"Snow",
        img:"https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=200",
        status: "Active",
        email:"snow@gmail.com",
        mobile: "9874569836"
    },
]