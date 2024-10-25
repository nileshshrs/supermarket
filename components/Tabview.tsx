'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

const Tabview = () => {
    const [activeTab, setActiveTab] = useState("advertised");

    return (
        <section className='flex flex-col items-center justify-center py-5 my-5 gap-10'>
            <h3 className='font-extrabold text-2xl'>TOP SELLING OFFERS</h3>
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)} className="w-full max-w-[400px] md:max-w-[700px] lg:max-w-[1000px] border rounded-none  border-gray-700">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                        value="advertised"
                        onClick={() => setActiveTab("advertised")}
                        className={`h-full font-bold border border-t-0 border-l-0 border-gray-700`}
                        style={{ backgroundColor: activeTab === "advertised" ? "#bfbfbf" : "transparent" }}
                    >
                        ADVERTISED OFFERS
                    </TabsTrigger>
                    <TabsTrigger
                        value="today"
                        onClick={() => setActiveTab("today")}
                        className={` h-full font-bold border border-t-0 border-r-0 border-gray-700`}
                        style={{ backgroundColor: activeTab === "today" ? "#bfbfbf" : "transparent" }}
                    >
                        TODAY OFFERS
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="advertised">
                    <Card className='border-none'>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" defaultValue="@peduarte" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="today">
                    <Card className='border-none'>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default Tabview;
