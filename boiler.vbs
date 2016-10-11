vid = InputBox("Please enter name of the Video directory:", "Create Video")
If vid = "" Then
    Wscript.Quit
Else
    'Creating new folder
    Wscript.Echo "Creating new Directory"
    Dim oFSO, scaf
    Set oFSO = CreateObject("Scripting.FileSystemObject")
    oFSO.CopyFolder "scaffolding", vid


    Dim objShell
    Set objShell = WScript.CreateObject( "WScript.Shell" )

    'Setup git branch
    Wscript.Echo "Setting up git ..." & vid
    objShell.Run "git checkout -b " & vid,0

    'Launching Atom
    Wscript.Echo "Launching Atom ..."
    objShell.Run "atom .",0

    Set objShell = Nothing
End If
