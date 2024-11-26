
export default function CoreConsept({image,title, description}) {
    console.log('redering coreconsept component');

    return (

        <li>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>

    )
}
