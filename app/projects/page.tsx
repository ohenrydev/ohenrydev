import projects from "@/database/cases.json";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLinkIcon, LockIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {

    return (
        <main className="w-full max-w-2xl flex flex-col items-center">

            <h1 className="mb-8 mt-16 font-bold text-xl md:text-2xl">My projects</h1>

            <p className="mb-2 font text-sm md:text-base text-center md:text-justify">
                {"Here are some of the projects I'm proud of. You won't see anything magical or matrix-breaking here, these are real projects from the real world. Take a look and have fun, I hope you find some inspiration here."}
            </p>


            <section className=" w-full mb-6 mt-8 max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6 place-items-stretch content-stretch">
                {projects.map((project) => {
                    return (
                        <Card key={project.uuid} data-nda={project.nda} className="flex flex-col data-[nda=true]:bg-gray-50 space-y-1">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    {project.title}
                                    {project.nda && <LockIcon className="size-4 text-gray-400 ml-auto" />}
                                </CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2">
                                    {project.techs.map((tech) => (
                                        <Badge key={tech} className="shadow-none hover:shadow-sm cursor-pointer">{tech}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                {project.nda ? (
                                    <p className={`w-full text-center text-sm text-gray-500 transition-opacity duration-300`}>
                                        Details available upon request
                                    </p>
                                ) : (
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                            Project details <ExternalLinkIcon className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    )
                })}
            </section>
        </main>
    )
}