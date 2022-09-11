let state = {
    posts: [{name: "Новости", path: "/news"},
        {name: "Погода", path: "/weather"},
        {name: "Природа", path: "/nature"},
        {name: "Политика", path: "/politics"}
    ],

    messageSets: [
        {path: "/news", value: "", author:""},
        {path: "/weather", value: "", author:""},
        {path: "/nature", value: "", author:""},
        {path: "/politics", value: "", author:""}
    ]
}
export default state