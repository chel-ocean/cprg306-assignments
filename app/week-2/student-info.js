import Link from "next/link";

export default function Page(){
    return (
        <div>
            <StudentInfo />
        </div>
    )
}

function StudentInfo(){
    return (
        <>
        <p>Chelsea Yang</p>
        <Link href="https://github.com/chel-ocean/cprg306-assignments" target="_blank">Github Link</Link>
        </>
    );
}
