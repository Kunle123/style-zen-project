import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Edit } from "lucide-react";
import { toast } from "sonner";

interface JobApplication {
  id: string;
  jobTitle: string;
  contactName: string;
  contactNumber: string;
  dateCreated: string;
  salary: string;
  organisation: string;
}

const mockApplications: JobApplication[] = [
  {
    id: "1",
    jobTitle: "Frontend Developer",
    contactName: "John Smith",
    contactNumber: "+1234567890",
    dateCreated: "2024-01-15",
    salary: "$75,000",
    organisation: "Tech Corp"
  },
  {
    id: "2",
    jobTitle: "Full Stack Engineer",
    contactName: "Sarah Johnson",
    contactNumber: "+1987654321",
    dateCreated: "2024-02-20",
    salary: "$85,000",
    organisation: "Innovation Labs"
  },
  {
    id: "3",
    jobTitle: "React Developer",
    contactName: "Mike Wilson",
    contactNumber: "+1122334455",
    dateCreated: "2024-03-10",
    salary: "$80,000",
    organisation: "Digital Solutions"
  }
];

const ApplicationHistory = () => {
  const [applications, setApplications] = useState<JobApplication[]>(mockApplications);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedApplication, setEditedApplication] = useState<JobApplication | null>(null);

  const handleRowClick = (application: JobApplication) => {
    setSelectedApplication(application);
    setEditedApplication({ ...application });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!editedApplication) return;

    setApplications(prev => 
      prev.map(app => 
        app.id === editedApplication.id ? editedApplication : app
      )
    );
    setIsModalOpen(false);
    setSelectedApplication(null);
    setEditedApplication(null);
    toast.success("Application updated successfully");
  };

  const handleDelete = () => {
    if (!selectedApplication) return;

    setApplications(prev => 
      prev.filter(app => app.id !== selectedApplication.id)
    );
    setIsModalOpen(false);
    setSelectedApplication(null);
    setEditedApplication(null);
    toast.success("Application deleted successfully");
  };

  const handleInputChange = (field: keyof JobApplication, value: string) => {
    if (!editedApplication) return;
    setEditedApplication(prev => prev ? { ...prev, [field]: value } : null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedApplication(null);
    setEditedApplication(null);
  };

  // Sort applications by date (oldest first)
  const sortedApplications = [...applications].sort((a, b) => 
    new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Application History</CardTitle>
            <p className="text-muted-foreground">Track all your job applications in one place</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Date Applied</TableHead>
                    <TableHead>Salary</TableHead>
                    <TableHead>Organisation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedApplications.map((application) => (
                    <TableRow 
                      key={application.id}
                      onClick={() => handleRowClick(application)}
                      className="cursor-pointer hover:bg-muted/50"
                    >
                      <TableCell className="font-medium">{application.jobTitle}</TableCell>
                      <TableCell>
                        <div>
                          <div>{application.contactName}</div>
                          <div className="text-sm text-muted-foreground">{application.contactNumber}</div>
                        </div>
                      </TableCell>
                      <TableCell>{new Date(application.dateCreated).toLocaleDateString()}</TableCell>
                      <TableCell>{application.salary}</TableCell>
                      <TableCell>{application.organisation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {sortedApplications.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No applications found. Start applying for jobs to see them here!
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Application</DialogTitle>
          </DialogHeader>
          
          {editedApplication && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  value={editedApplication.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="contactName">Contact Name</Label>
                <Input
                  id="contactName"
                  value={editedApplication.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  value={editedApplication.contactNumber}
                  onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="dateCreated">Date Applied</Label>
                <Input
                  id="dateCreated"
                  type="date"
                  value={editedApplication.dateCreated}
                  onChange={(e) => handleInputChange('dateCreated', e.target.value)}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="salary">Salary</Label>
                <Input
                  id="salary"
                  value={editedApplication.salary}
                  onChange={(e) => handleInputChange('salary', e.target.value)}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="organisation">Organisation</Label>
                <Input
                  id="organisation"
                  value={editedApplication.organisation}
                  onChange={(e) => handleInputChange('organisation', e.target.value)}
                />
              </div>
            </div>
          )}
          
          <DialogFooter className="flex gap-2">
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              <Edit className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApplicationHistory;