// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

using Microsoft.AspNetCore.Components;

namespace SiemensIXBlazor.Components.Modal
{
    /// <summary>
    /// Blazor wrapper for ix-modal-loading web component
    /// Provides loading indication for modal dialogs
    /// </summary>
    public partial class ModalLoading : IXBaseComponent
    {
        [Parameter]
        public RenderFragment? ChildContent { get; set; }

        [Parameter, EditorRequired]
        public string Id { get; set; } = string.Empty;

        /// <summary>
        /// Loading text to display. Default: "Loading..."
        /// </summary>
        [Parameter]
        public string Text { get; set; } = "Loading...";

        /// <summary>
        /// Center the loading indicator inside the modal. Default: false
        /// </summary>
        [Parameter]
        public bool Centered { get; set; } = false;
    }
}
