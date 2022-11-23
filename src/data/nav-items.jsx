import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import GroupsIcon from '@mui/icons-material/Groups';
import SubjectIcon from '@mui/icons-material/Subject';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PeopleIcon from '@mui/icons-material/People';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const navItems = [
    {
        icon: <HomeIcon/>,
        path: "/home",
        name: "Principal"
    },
    {
        icon: <PersonIcon/>,
        path: "/estudiante",
        name: "Estudiantes"
    },
    {
        icon: <PeopleIcon/>,
        path: "/profesor",
        name: "Profesores"
    },
    {
        icon: <ManageAccountsIcon/>,
        path: "/profesor-guia",
        name: "Profesor Guía"
    },
    {
        icon: <GroupsIcon/>,
        path: "/grupo",
        name: "Grupos"
    },

    {
        icon: <SubjectIcon/>,
        path: "/asignatura",
        name: "Asignaturas"
    },
    {
        icon: <StickyNote2Icon/>,
        path: "/nota",
        name: "Notas"
    },

    {
        icon: <FolderIcon/>,
        path: "/programa-de-estudio",
        name: "Plan de Estudio"
    },
]

export default navItems