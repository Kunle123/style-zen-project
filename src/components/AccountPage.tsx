import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Camera, Mail, Phone, User, CreditCard, Download, Shield, Trash2, MapPin, Linkedin } from "lucide-react";

export function AccountPage() {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  
  // Profile state
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+447966461005",
    emailVerified: true,
    avatarUrl: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    county: "",
    postcode: "",
    linkedin: "",
  });

  const [editedProfile, setEditedProfile] = useState(profile);
  
  // Password change state
  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  // Subscription state
  const [subscription] = useState({
    plan: "Professional",
    status: "Active",
    nextBilling: "February 15, 2025",
    amount: "$29.99/month",
  });

  const handleEditProfile = () => {
    setEditedProfile(profile);
    setIsEditing(true);
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    
    // Validate phone number format
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (editedProfile.phone && !phoneRegex.test(editedProfile.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter phone number in international format (e.g., +447966461005)",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Validate UK postcode format
    const postcodeRegex = /^([A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}|GIR\s*0AA)$/i;
    if (editedProfile.postcode && !postcodeRegex.test(editedProfile.postcode)) {
      toast({
        title: "Invalid postcode",
        description: "Please enter a valid UK postcode (e.g., SW1A 1AA or M1 1AA)",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Validate LinkedIn URL format
    const linkedinRegex = /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-]+\/?$/;
    if (editedProfile.linkedin && !linkedinRegex.test(editedProfile.linkedin)) {
      toast({
        title: "Invalid LinkedIn URL",
        description: "Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/yourprofile)",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setProfile(editedProfile);
    setIsEditing(false);
    setIsLoading(false);
    
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleCancelEdit = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleResendVerification = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    toast({
      title: "Verification email sent",
      description: "Please check your inbox for the verification link.",
    });
  };

  const handlePasswordChange = async () => {
    if (passwordData.new !== passwordData.confirm) {
      toast({
        title: "Passwords don't match",
        description: "New password and confirmation must match.",
        variant: "destructive",
      });
      return;
    }

    if (passwordData.new.length < 8) {
      toast({
        title: "Password too short",
        description: "New password must be at least 8 characters long.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsPasswordModalOpen(false);
    setPasswordData({ current: "", new: "", confirm: "" });
    
    toast({
      title: "Password changed",
      description: "Your password has been successfully updated.",
    });
  };

  const handleDeleteAccount = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    
    toast({
      title: "Account deleted",
      description: "Your account has been permanently deleted.",
    });
    
    // In a real app, this would redirect to login or logout
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setEditedProfile({ ...editedProfile, avatarUrl: url });
      
      toast({
        title: "Avatar updated",
        description: "Your profile picture has been updated.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Account Settings</h1>
          <p className="text-muted-foreground">Manage your profile and subscription preferences</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Profile Section */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar */}
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={editedProfile.avatarUrl} />
                  <AvatarFallback className="text-lg">
                    {editedProfile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={editedProfile.name}
                    onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="email"
                      value={editedProfile.email}
                      disabled
                      className="flex-1"
                    />
                    {profile.emailVerified ? (
                      <Badge variant="default" className="bg-success text-success-foreground">
                        Verified
                      </Badge>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleResendVerification}
                        disabled={isLoading}
                      >
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Verify"}
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={editedProfile.phone}
                    onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                    disabled={!isEditing}
                    placeholder="+447966461005"
                  />
                </div>

                {/* Address Section */}
                <div className="space-y-4">
                  <Label className="flex items-center gap-2 text-base font-medium">
                    <MapPin className="h-4 w-4" />
                    Address
                  </Label>
                  
                  <div className="space-y-2">
                    <Label htmlFor="addressLine1">Address Line 1</Label>
                    <Input
                      id="addressLine1"
                      value={editedProfile.addressLine1}
                      onChange={(e) => setEditedProfile({ ...editedProfile, addressLine1: e.target.value })}
                      disabled={!isEditing}
                      placeholder="e.g., 10 Downing Street"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
                    <Input
                      id="addressLine2"
                      value={editedProfile.addressLine2}
                      onChange={(e) => setEditedProfile({ ...editedProfile, addressLine2: e.target.value })}
                      disabled={!isEditing}
                      placeholder="e.g., Flat 2B, Westminster"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Town/City</Label>
                      <Input
                        id="city"
                        value={editedProfile.city}
                        onChange={(e) => setEditedProfile({ ...editedProfile, city: e.target.value })}
                        disabled={!isEditing}
                        placeholder="e.g., London"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="county">County (Optional)</Label>
                      <Input
                        id="county"
                        value={editedProfile.county}
                        onChange={(e) => setEditedProfile({ ...editedProfile, county: e.target.value })}
                        disabled={!isEditing}
                        placeholder="e.g., Greater London"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input
                      id="postcode"
                      value={editedProfile.postcode}
                      onChange={(e) => setEditedProfile({ ...editedProfile, postcode: e.target.value.toUpperCase() })}
                      disabled={!isEditing}
                      placeholder="e.g., SW1A 1AA"
                      className="uppercase"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn Profile
                  </Label>
                  <Input
                    id="linkedin"
                    value={editedProfile.linkedin}
                    onChange={(e) => setEditedProfile({ ...editedProfile, linkedin: e.target.value })}
                    disabled={!isEditing}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {isEditing ? (
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProfile} disabled={isLoading} className="flex-1">
                      {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={handleCancelEdit} disabled={isLoading}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button onClick={handleEditProfile} variant="outline">
                    Edit Profile
                  </Button>
                )}

                <Dialog open={isPasswordModalOpen} onOpenChange={setIsPasswordModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Change Password
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Change Password</DialogTitle>
                      <DialogDescription>
                        Enter your current password and choose a new one.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input
                          id="current-password"
                          type="password"
                          value={passwordData.current}
                          onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          value={passwordData.new}
                          onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={passwordData.confirm}
                          onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setIsPasswordModalOpen(false)}
                        disabled={isLoading}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handlePasswordChange} disabled={isLoading}>
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                        Change Password
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="flex items-center gap-2">
                      <Trash2 className="h-4 w-4" />
                      Delete Account
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove all your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteAccount} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Delete Account
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>

          {/* Subscription & Billing Section */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Subscription & Billing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Current Plan</span>
                  <Badge variant="default">{subscription.plan}</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge variant="default" className="bg-success text-success-foreground">
                    {subscription.status}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Next Billing</span>
                  <span className="text-sm font-medium">{subscription.nextBilling}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Amount</span>
                  <span className="text-sm font-medium">{subscription.amount}</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  Upgrade Plan
                </Button>
                <Button variant="outline" className="w-full">
                  Manage Payment Methods
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Invoice
                </Button>
                <Button variant="destructive" className="w-full">
                  Cancel Subscription
                </Button>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Billing History</h4>
                <div className="text-sm text-muted-foreground">
                  No billing history available
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Privacy & Data</h4>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download My Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}